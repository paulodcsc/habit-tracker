interface iHabit {
  completed: number;
}

export function Habit(props: iHabit) {
  return (
    <p className="bg-indigo-600 text-indigo-200 w-10 text-center m-1">
      {props.completed}
    </p>
  );
}
