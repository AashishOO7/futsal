import axios from 'axios';

const PlayerRegisterService = async (username, email, contact, password) => {
  if (username && email && contact && password) {
    const data = JSON.stringify({
      name: username,
      address: '',
      email: email,
      password: password,
      phone: contact,
    });

    console.log(data);

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/users/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    const response = await axios.request(config);

    if (response.status !== 200) {
      throw new Error('Signup failed');
    }

    console.log(JSON.stringify(response.data));
  } else {
    throw new Error('Please fill in all fields');
  }
};

export { PlayerRegisterService };
