// Manual & un-optimized system
// const ShowEmoji = ({ count }: { count: number }) => {
//   if (count > 0) {
//     const numberOfEmojis = Math.floor(count / 5);
//     const emojis = Array(numberOfEmojis).fill("👍");
//     if (emojis.length === 0) return null;
//     return (
//       <div className="text-2xl bg-purple-200 rounded-full px-3 pb-2">
//         {emojis}
//       </div>
//     );
//   } else {
//     const numberOfEmojis = Math.floor(count / -5);
//     const emojis = Array(numberOfEmojis).fill("👎");
//     if (emojis.length === 0) return null;
//     return (
//       <div className="text-2xl bg-purple-200 rounded-full px-3 pb-2">
//         {emojis}
//       </div>
//     );
//   }
// };

// Optimized System
const ShowEmoji = ({ count }: { count: number }) => {
  const emoji = count > 0 ? "👍" : "👎";
  const divisor = count > 0 ? 5 : -5;
  const numberOfEmojis = Math.floor(count / divisor);
  const emojis = Array(numberOfEmojis).fill(emoji);

  if (emojis.length === 0) return null;

  return (
    <div className="text-2xl bg-purple-200 rounded-full px-3 pb-2">
      {emojis}
    </div>
  );
};

export default ShowEmoji;
