// api.js - 백엔드 기능명세서에 맞춘 API 연동 파일
import axios from 'axios';

const BASE_URL = 'http://13.209.97.185:8080'; // 실제 API 서버 주소로 수정 필요

// 📌 전체 게시판 목록 조회
export const fetchBoards = async () => {
  const response = await axios.get(`${BASE_URL}/api/boards/1/posts`);
  return response.data;
};

// 📌 특정 게시판의 게시글 목록 조회
export const fetchPostsByBoard = async (boardId) => {
  const response = await axios.get(`${BASE_URL}/boards/${boardId}/posts`);
  return response.data;
};

// 📌 게시글 등록
export const createPost = async (boardId, postData) => {
  const response = await axios.post(`${BASE_URL}/api/boards/${boardId}/posts`, postData);
  return response.data;
};

// 📌 게시글 수정
export const updatePost = async (postId, updatedData) => {
  const response = await axios.put(`${BASE_URL}/posts/${postId}`, updatedData);
  return response.data;
};

// 📌 게시글 삭제
export const deletePost = async (postId) => {
  const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
  return response.data;
};

// 📌 게시글 단건 조회
export const fetchPostById = async (postId) => {
  const response = await axios.get(`${BASE_URL}/posts/${postId}`);
  return response.data;
};

// 📌 게시글 좋아요 등록/삭제
export const togglePostLike = async (postId) => {
  const response = await axios.post(`${BASE_URL}/posts/${postId}/like`);
  return response.data;
};

// 📌 댓글 등록
export const createComment = async (postId, commentData) => {
  const response = await axios.post(`${BASE_URL}/posts/${postId}/comments`, commentData);
  return response.data;
};

// 📌 특정 게시글의 댓글 목록 조회
export const fetchCommentsByPost = async (postId) => {
  const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
  return response.data;
};

// 📌 댓글 삭제
export const deleteComment = async (commentId) => {
  const response = await axios.delete(`${BASE_URL}/comments/${commentId}`);
  return response.data;
};

// 📌 댓글 좋아요 기능
export const toggleCommentLike = async (commentId) => {
  const response = await axios.post(`${BASE_URL}/comments/${commentId}/like`);
  return response.data;
};

// 📌 게시글 요약
export const summarizePost = async (postId) => {
  const response = await axios.post(`${BASE_URL}/posts/${postId}/summary`);
  return response.data;
};

// 📌 댓글 요약
export const summarizeComments = async (postId) => {
  const response = await axios.post(`${BASE_URL}/posts/${postId}/summary-comments`);
  return response.data;
};

// 📌 내가 작성한 게시글 목록 조회
export const fetchMyPosts = async () => {
  const response = await axios.get(`${BASE_URL}/boards/posts/user`);
  return response.data;
};

// 📌 인기 게시글 모아보기
export const fetchPopularPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts/popular`);
  return response.data;
};
