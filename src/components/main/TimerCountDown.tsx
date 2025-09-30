import { useTimer } from "react-timer-hook";

function TimerCountDown({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("OTP expired"),
  });

  return (
    <div className="flex gap-1">
      <p className="text-[#4b4d4c] ">OTP expires in:</p>
      <span className="text-red-600">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
}

export default TimerCountDown;
