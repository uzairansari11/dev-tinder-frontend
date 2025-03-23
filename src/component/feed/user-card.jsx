import React from 'react';

export const UserCard = ({ user, onAccept, onIgnore }) => {
  const { _id, firstName, lastName, about, photoUrl, skills } = user;

  return (
    <div className="card card-side bg-base-100 shadow-xl w-full max-h-100 min-h-50">
      <figure className="w-1/3">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="h-full object-cover"
        />
      </figure>

      <div className="card-body w-2/3">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-2xl font-bold capitalize">
            {firstName} {lastName}
          </h2>

          <div className="badge badge-ghost">Dev Match</div>
        </div>

        <p className="text-gray-600 my-2">{about}</p>

        {skills && skills.length > 0 ? (
          <div className="flex flex-wrap gap-2 my-2">
            {skills.map((skill, index) => (
              <span key={index} className="badge badge-secondary">
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">No skills listed</p>
        )}

        <div className="divider my-2"></div>

        <div className="card-actions justify-end">
          <button
            className="btn btn-outline btn-error"
            onClick={() => onIgnore(_id)}
          >
            Ignore
          </button>

          <button className="btn btn-primary" onClick={() => onAccept(_id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
