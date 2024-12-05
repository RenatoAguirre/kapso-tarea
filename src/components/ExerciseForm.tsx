import React, { useState } from "react";
import { Exercise } from "../types";

interface ExerciseFormProps {
  onAddExercise: (exercise: Exercise) => void;
  onClose: () => void;
}

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  onAddExercise,
  onClose,
}) => {
  const [exercise, setExercise] = useState<Exercise>({
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exercise.name || exercise.sets <= 0 || exercise.reps <= 0) return;

    onAddExercise(exercise);
    setExercise({ name: "", sets: 0, reps: 0, weight: 0 });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Agregar Ejercicio</h2>

      <div>
        <label
          htmlFor="exercise-name"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre del ejercicio
        </label>
        <input
          id="exercise-name"
          type="text"
          placeholder="Nombre del ejercicio"
          value={exercise.name}
          onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <div>
        <label
          htmlFor="series"
          className="block text-sm font-medium text-gray-700"
        >
          Series
        </label>
        <input
          id="series"
          type="number"
          placeholder="Series"
          value={exercise.sets}
          onChange={(e) =>
            setExercise({ ...exercise, sets: parseInt(e.target.value) })
          }
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <div>
        <label
          htmlFor="reps"
          className="block text-sm font-medium text-gray-700"
        >
          Repeticiones
        </label>
        <input
          id="reps"
          type="number"
          placeholder="Reps"
          value={exercise.reps}
          onChange={(e) =>
            setExercise({ ...exercise, reps: parseInt(e.target.value) })
          }
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <div>
        <label
          htmlFor="weight"
          className="block text-sm font-medium text-gray-700"
        >
          Peso
        </label>
        <div className="relative">
          <input
            id="weight"
            type="number"
            placeholder="Peso"
            value={exercise.weight}
            onChange={(e) =>
              setExercise({ ...exercise, weight: parseFloat(e.target.value) })
            }
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <span className="absolute right-2 top-2 text-gray-500">kg</span>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
export default ExerciseForm;
