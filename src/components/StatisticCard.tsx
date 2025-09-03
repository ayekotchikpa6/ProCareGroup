import React from 'react';

interface Statistic {
  value: string;
  label: string;
  description: string;
}

interface StatisticCardProps {
  statistic: Statistic;
  index: number;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ statistic, index }) => {
  return (
    <div className="text-center p-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg hover:bg-opacity-100 transition-all duration-300 hover:transform hover:scale-105">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {statistic.value}
      </div>
      <div className="text-lg font-semibold text-blue-100 mb-2">
        {statistic.label}
      </div>
      <div className="text-sm text-blue-200">
        {statistic.description}
      </div>
    </div>
  );
};

export default StatisticCard;