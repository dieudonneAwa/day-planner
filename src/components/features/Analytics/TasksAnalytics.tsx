import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { loadTasksAnalyticsAction } from '../../../redux/actions';
import { StoreState } from '../../../redux/store';
import { Icon } from '../../common/Icon';
import Modal from '../../common/Modal/Modal';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  percent: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TasksAnalytics = () => {
  const dispatch = useDispatch();
  const {
    myTasks: { analytics },
  } = useSelector((state: StoreState): StoreState => state);

  const [showModal, setShowModal] = useState(false);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    dispatch(loadTasksAnalyticsAction());
  }, []);

  useEffect(() => {
    setColors(analytics.map((_) => `#${Math.floor(Math.random() * 16777215).toString(16)}`));
  }, [analytics]);

  const handleViewAnalytics = () => {
    setShowModal(true);
  };

  return (
    <>
      <Icon size={25} onClick={handleViewAnalytics} className="cursor-pointer" name="insights" />
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        {!!analytics.length && (
          <ResponsiveContainer minWidth={400} minHeight={400} width="100%" height="100%">
            <PieChart width={500} height={500}>
              <Legend />
              <Pie
                data={analytics}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                fill="#8884d8"
                dataKey="value"
              >
                {analytics?.map((_: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </Modal>
    </>
  );
};

export default TasksAnalytics;
