import axios from 'axios'
export default axios.get('https://www.easy-mock.com/mock/5cb32ebbbc34df60b08c297a/wgy', {
    params: {
        name: 'wgy',
        age:32
    }
}).then((data) => { 
    return data;
})
