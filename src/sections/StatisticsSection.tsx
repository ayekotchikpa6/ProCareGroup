import React from 'react';
import StatisticCard from '../components/StatisticCard';

interface Statistic {
  value: string;
  label: string;
  description: string;
}

interface StatisticsSectionProps {
  statistics: Statistic[];
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ statistics }) => {
  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.8)), url('https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Measurable results that demonstrate our commitment to healthcare excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((statistic, index) => (
            <StatisticCard key={index} statistic={statistic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;