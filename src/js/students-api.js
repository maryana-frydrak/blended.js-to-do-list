import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com',
});

export const getStudentsList = async () => {
  return serverApi.get('/public/students').then(res => res.data);
};
export const createStudent = async body => {
  return serverApi.post('/public/students', body).then(res => res.data);
};
export const updateStudent = async (id, body) => {
  return serverApi.patch(`/public/students/${id}`, body).then(res => res.data);
};
export const replaceStudent = async (id, body) => {
  return serverApi.put(`/public/students/${id}`, body).then(res => res.data);
};
export const deleteStudent = async id => {
  return serverApi.delete(`/public/students/${id}`).then(res => res.data);
};

// let config = {
//   method: 'patch',
//   maxBodyLength: Infinity,
//   url: '/public/students/69b6cd3c9921505a3b87fc52',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   data: data,
// };

// axios
//   .request(config)
//   .then(response => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(error => {
//     console.log(error);
//   }); витягнуто з Postman
