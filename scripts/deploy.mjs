import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "dist");
const git = (args, cwd = root) =>
  execFileSync("git", args, { cwd, encoding: "utf8" }).trim();

if (git(["status", "--porcelain"])) {
  throw new Error("Commit your source changes before publishing.");
}
if (!existsSync(join(output, "index.html")) || !existsSync(join(output, ".nojekyll"))) {
  throw new Error("Build the site first with pnpm build.");
}

const remote = git(["remote", "get-url", "origin"]);
const revision = git(["rev-parse", "--short", "HEAD"]);
const authorName = git(["log", "-1", "--format=%an"]);
const authorEmail = git(["log", "-1", "--format=%ae"]);
const staging = mkdtempSync(join(tmpdir(), "farber-pages-"));

try {
  git(["init", "-b", "gh-pages"], staging);
  git(["remote", "add", "origin", remote], staging);
  git(["config", "user.name", authorName], staging);
  git(["config", "user.email", authorEmail], staging);

  const branch = spawnSync(
    "git", ["ls-remote", "--exit-code", "origin", "refs/heads/gh-pages"],
    { cwd: staging, encoding: "utf8" },
  );
  if (branch.status === 0) {
    git(["fetch", "--depth=1", "origin", "gh-pages"], staging);
    git(["reset", "--soft", "FETCH_HEAD"], staging);
  } else if (branch.status !== 2) {
    throw new Error(branch.stderr || "Could not check the publishing branch.");
  }

  git(["--git-dir", join(staging, ".git"), "--work-tree", output, "add", "--all"], output);
  const changes = spawnSync("git", ["diff", "--cached", "--quiet"], { cwd: staging });
  if (changes.status === 1) {
    git(["commit", "-m", `Publish site from ${revision}`], staging);
    git(["push", "origin", "HEAD:refs/heads/gh-pages"], staging);
    console.log("Site uploaded. GitHub Pages will publish this build shortly.");
  } else if (changes.status === 0) {
    console.log("The published build is already up to date.");
  } else {
    throw new Error("Could not compare the publishing files.");
  }
} finally {
  rmSync(staging, { recursive: true, force: true });
}
