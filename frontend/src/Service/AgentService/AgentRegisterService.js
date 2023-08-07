import axios from 'axios';


const AgentRegisterService = async (futsalName,contact , email , address , name , password)  => {
if (futsalName && contact && email && address && name && password) {
  
    let data = JSON.stringify({
      futsalName: futsalName,
      name: name,
      address: address,
      email: email,
      password: password,
      phone: contact,
    });

    console.log(data);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/users/agent',
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

export { AgentRegisterService };
