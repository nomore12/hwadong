import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from 'src/aws-exports';
import { API } from 'aws-amplify';
import { PostCreateForm } from 'src/ui-components';
import {
  PostCreateFormInputValues,
  PostCreateFormValidationValues,
} from 'src/ui-components/PostCreateForm';
import axios from 'axios';
import { DataStore } from 'aws-amplify';
import { Post } from '../models/index';

Amplify.configure(awsExports);

const Test = ({ signOut, user }: any) => {
  const onClick = () => {
    console.log(user);
    signOut();
  };

  function getData() {
    const apiName = 'hwadongApi';
    const path = '/posts';
    const myInit = {
      headers: {
        // 'Access-Control-Allow-Methods': 'GET OPTIONS',
        // 'Access-Control-Allow-Headers':
        //   "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
        // 'Access-Control-Allow-Origin': '*',
      },
      body: {},
    };

    return API.get(apiName, path, myInit);
  }

  useEffect(() => {
    (async function () {
      const response = await getData();
      console.log(response);
    })();
  }, []);

  return (
    <div>
      <div>login</div>
      <button
        onClick={() => {
          const response = API.get('hwadongApi', '/posts', [
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
      <PostCreateForm
        {...{
          onChange: (
            data: PostCreateFormInputValues
          ): PostCreateFormInputValues => {
            console.log(data);
            return data;
          },
          onSubmit: (
            data: PostCreateFormInputValues
          ): PostCreateFormInputValues => {
            console.log(data);
            return {
              title: data.title,
              desc: data.desc,
              createdAt: data.createdAt,
            };
          },
        }}
      />
      <button onClick={onClick}>Sign out</button>
    </div>
  );
};

export default withAuthenticator(Test);
