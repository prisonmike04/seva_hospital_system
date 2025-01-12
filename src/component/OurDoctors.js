import React from 'react';

const doctors = [
  { name: 'Dr. Debashish Majumder', specialty: 'Oncologist', description: 'Specialist in chemotherapy.' },
  { name: 'Dr. Disha Dey', specialty: 'Psychiatrist', description: 'Specialist in curing schizophrenia.' },
  { name: 'Dr. Silajit Deb', specialty: 'Heart Specialist', description: 'Specialist in treatment of heart strokes.' },
];

const OurDoctors = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10">
      {doctors.map((doctor, index) => (
        <div key={index} className="bg-white shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden">
          <img
            src={`/doctor${index + 1}.jpg`}
            alt={doctor.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-blue-700">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-sm text-gray-500 mt-2">{doctor.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurDoctors;
