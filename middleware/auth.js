


export default function (context) {
    context.isLogin = process.server
      ? true
      : !!localStorage.getItem('user')
    context.store.commit('checkLogin', context.isLogin);
    
}