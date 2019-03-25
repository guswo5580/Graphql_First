//schema에서 선언한 쿼리에 대한 대답을 정하는 부분
const Rick = {
    name : 'Rick',
    age : 26,
    gender : 'male'
};
const resolvers = {
    Query : {
        person : () => Rick 
    }
};

export default resolvers;