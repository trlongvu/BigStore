import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    console.log(`Lỗi: ${error}`);
  }
};

export const logoutUser = async (url) => {
  try {
    const { data } = await axios.post(
      apiUrl + url,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(apiUrl + url, params);

    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const uploadImage = async (url, updatedData) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    const { data } = await axios.patch(apiUrl + url, updatedData, params);
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const editData = async (url, updatedData) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.patch(apiUrl + url, updatedData, params);
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteData = async (url) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.delete(apiUrl + url, params);
    return data;
  } catch (error) {
    return handleError(error);
  }
};

const handleError = (error) => {
  if (error.response && error.response.data) {
    return error.response.data;
  }
  return { success: false, message: 'Lỗi kết nối đến server.' };
};
