

const ShowEmoji = ({ count }: { count: number }) => {
  const numberOfEmojis = Math.floor(count / 5);
  const emojis = Array(numberOfEmojis).fill("👍");
  return <div>{emojis}</div>;
};

export default ShowEmoji;
