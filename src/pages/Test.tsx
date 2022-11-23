import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from 'src/aws-exports';
import { API } from 'aws-amplify';

Amplify.configure(awsExports);

const Test = ({ signOut, user }: any) => {
  const onClick = () => {
    console.log(user);
    signOut();
  };

  return (
    <div>
      <div>login</div>
      <button
        onClick={() => {
          const response = API.get('hwadongApi', '/posts/1', [
            'lbdta9agfe',
            'hwadong-api-key',
          ]);
          console.log(response);
          response
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}>
        api
      </button>
      <button onClick={onClick}>Sign out</button>
    </div>
  );
};

export default withAuthenticator(Test);
