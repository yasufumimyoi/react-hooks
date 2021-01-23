import React, { useContext, useEffect, useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
  PolarRadiusAxis,
} from 'recharts';

import { VideoContext } from '../../contexts/video-context';

const data = [
  {
    subject: 'JavaScript',
    Mission: 0,
    fullMark: 9,
  },
  {
    subject: 'Docker',
    Mission: 0,
    fullMark: 9,
  },
  {
    subject: 'Node',
    Mission: 0,
    fullMark: 9,
  },
  {
    subject: 'Router',
    Mission: 0,
    fullMark: 9,
  },
  {
    subject: 'Material-ui',
    Mission: 0,
    fullMark: 9,
  },
  {
    subject: 'Firebase',
    Mission: 0,
    fullMark: 9,
  },
  {
    subject: 'React',
    Mission: 0,
    fullMark: 9,
  },
  {
    subject: 'AWS',
    Mission: 0,
    fullMark: 9,
  },
  {
    subject: 'TypeScript',
    Mission: 0,
    fullMark: 9,
  },
];

export const Progress = () => {
  const { allVideo } = useContext(VideoContext);
  const [state, setData] = useState({ data: [] });

  const chart = () => {
    let temp1 = allVideo.filter((video) => video.category === 'aws');
    let temp2 = allVideo.filter((video) => video.category === 'docker');
    let temp3 = allVideo.filter((video) => video.category === 'firebase');
    let temp4 = allVideo.filter((video) => video.category === 'javascript');
    let temp5 = allVideo.filter((video) => video.category === 'node');
    let temp6 = allVideo.filter((video) => video.category === 'react');
    let temp7 = allVideo.filter((video) => video.category === 'router');
    let temp8 = allVideo.filter((video) => video.category === 'typescript');
    let temp9 = allVideo.filter((video) => video.category === 'material');

    let aws = temp1.filter((video) => video.completed === true);
    let docker = temp2.filter((video) => video.completed === true);
    let fire = temp3.filter((video) => video.completed === true);
    let javascript = temp4.filter((video) => video.completed === true);
    let node = temp5.filter((video) => video.completed === true);
    let react = temp6.filter((video) => video.completed === true);
    let router = temp7.filter((video) => video.completed === true);
    let typescript = temp8.filter((video) => video.completed === true);
    let material = temp9.filter((video) => video.completed === true);

    setData({
      data: [
        { subject: 'JavaScript', Mission: javascript.length, fullMark: 9 },
        { subject: 'Docker', Mission: docker.length, fullMark: 9 },
        { subject: 'Node', Mission: node.length, fullMark: 9 },
        { subject: 'Router', Mission: router.length, fullMark: 9 },
        { subject: 'Material', Mission: material.length, fullMark: 9 },
        { subject: 'Firebase', Mission: fire.length, fullMark: 9 },
        { subject: 'React', Mission: react.length, fullMark: 9 },
        { subject: 'AWS', Mission: aws.length, fullMark: 9 },
        { subject: 'TypeScript', Mission: typescript.length, fullMark: 9 },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, [allVideo]);

  return (
    <div>
      {state.data.length > 0 ? (
        <ResponsiveContainer width="95%" height={500}>
          <RadarChart
            outerRadius={150}
            width={500}
            height={500}
            data={state.data}
          >
            <PolarGrid />
            <Tooltip />
            <PolarAngleAxis dataKey="subject" style={{ fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 9]} tick={false} />
            <Radar
              dataKey="Mission"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="95%" height={500}>
          <RadarChart outerRadius={150} width={500} height={500} data={data}>
            <PolarGrid />
            <Tooltip />
            <PolarAngleAxis dataKey="subject" style={{ fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 9]} tick={false} />
            <Radar
              dataKey="Mission"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
