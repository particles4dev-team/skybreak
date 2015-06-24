module.exports = function(payload){
    if( payload.branch === 'master' )
    {
        console.log('test', payload);
    }
}