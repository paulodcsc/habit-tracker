interface iHabit {
  completed: string;
}

export function Habit(props: iHabit) {
  return (
    <p className="bg-rose-600 text-white w-28 text-center m-1">
      {props.completed}
    </p>
  );
}
