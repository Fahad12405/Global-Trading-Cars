export default function Logout() {

    const hadleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/'
        
    }

    return (
        <div className="p-18" >
            <p>Are you sure wanna logout </p>
            <p>click here to <span className="text-red-600 cursor-pointer" onClick={hadleLogout} > LogOut </span> </p>
        </div>
    );
}