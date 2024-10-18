import React, { useState } from 'react';

const MoodCheckInPage = () => {
  const [mood, setMood] = useState('');

  const handleMoodSubmit = (e) => {
    e.preventDefault();
    console.log(`User mood is: ${mood}`);
    // Here you can add mood-based recommendations or store data
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-100">
      <h2 className="text-3xl font-bold text-gray-800">How are you feeling today?</h2>
      <form onSubmit={handleMoodSubmit} className="mt-6 space-y-4">
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-64"
          required
        >
          <option value="">Select your mood</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="anxious">Anxious</option>
          <option value="stressed">Stressed</option>
        </select>
        <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MoodCheckInPage;
