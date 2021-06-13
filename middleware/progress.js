export default function (context) {
  const challengeNum = Number(/challenge(\d)/.exec(context.route.name)[1]); // Get challenge number from URL path
  const challengeProgress = currentChallenge(context); // Returns 1, 2, 3 depending on which pages should be allowed.
  if (!Boolean(challengeNum <= challengeProgress)) {
    context.redirect(`/challenge${challengeProgress}`);
  }
}

// Returns 1, 2, 3 depending on which pages should be allowed.
function currentChallenge(context) {
  return Object.keys(context.$auth.user.challenges).reduce(
    (acc, challenge) => {
      return acc + context.$auth.user.challenges[challenge].completed;
    },
    0
  ) + 1;
}
