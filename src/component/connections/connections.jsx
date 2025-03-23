import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance, { endPoints } from '../../api/axios';
import {
  addConnections,
  connectionsSelector,
} from '../../redux/slices/connections-slice';
import { FullscreenLoader } from '../loading/loader';

const ConnectionCard = ({ user }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <figure className="h-48 overflow-hidden">
        <img
          src={
            user.photoUrl || 'https://via.placeholder.com/300x200?text=No+Image'
          }
          alt={`${user.firstName} ${user.lastName}`}
          className="w-full h-full object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg capitalize">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-base-content/70 line-clamp-2 min-h-[40px]">
          {user.about || 'No bio available'}
        </p>
        {user.skills && user.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {user.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="badge badge-primary badge-sm">
                {skill}
              </span>
            ))}
            {user.skills.length > 3 && (
              <span className="badge badge-ghost badge-sm">
                +{user.skills.length - 3} more
              </span>
            )}
          </div>
        )}
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary btn-sm">View Profile</button>
        </div>
      </div>
    </div>
  );
};

export const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector(connectionsSelector);
  const [loading, setLoading] = React.useState(true);

  const getConnections = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(endPoints.user.connection);
      const data = response.data;
      dispatch(addConnections(data));
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getConnections();
  }, [getConnections]);

  if (loading) {
    return <FullscreenLoader />;
  }

  if (!connections || connections.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-base-content/70">
            You don't have any connections yet
          </h2>
          <p className="mt-2">Connect with other users to build your network</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Connections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {connections.map((user) => (
          <ConnectionCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};
