import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const backHome = () => {
    history.push('/home');
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => backHome()}>
          Back Home
        </Button>
      }
    />
  );
};
