interface RankingCardProps {
  score: 0 | 1 | 2 | 3 | 4;
}

const RankingCard = ({ score }: RankingCardProps) => {
  let background =
    score === 4
      ? "#F7A60E"
      : score === 3
      ? "#F9BB44"
      : score === 2
      ? "#FBCE7B"
      : score === 1
      ? "#FCE2B1"
      : "#FEF6E7";
  return (
    <div className={`p-6 h-60 w-40 flex items-center justify-center`} style={{ background }}>
      {score}
    </div>
  );
};

export default RankingCard;
