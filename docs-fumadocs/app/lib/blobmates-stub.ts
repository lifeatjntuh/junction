/**
 * Empty stand-in for `blobmates/react`.
 *
 * `blobmates` is an optional peer of @lifeatjntuh/junction: ProfileCard
 * loads it with a dynamic import and falls back to a pastel placeholder
 * when it is not there (`mod.LiveBlobmate` is undefined here, so the
 * placeholder shows). The same trick lives in the Docusaurus docs as
 * the `blobmates-ignore` webpack alias — without it, the bundler fails
 * trying to resolve the optional peer.
 */
export {};
