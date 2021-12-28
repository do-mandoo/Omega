import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../component/Sample';
import { getPostItem } from '../modules/sample';

const SampleContainer = ({ getPostItem, post, loadingPost }) => {
  console.log(getPostItem, 7);
  console.log(post, 6);
  useEffect(() => {
    getPostItem(1);
  }, [getPostItem]);

  return <Sample board={post} loadingPost={loadingPost} />;
};

export default connect(
  ({ sample }) => ({
    post: sample.post,
    loadingPost: sample.loading.GET_POST,
  }),
  { getPostItem },
)(SampleContainer);
