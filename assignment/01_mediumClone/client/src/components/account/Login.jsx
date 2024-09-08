import {Box} from '@mui/material'



const Login=()=>{
    const imageURL="https://imgs.search.brave.com/ZSnQ4iO2XqigiIhuiLiBcScOdi1fPLzvhtHm2BmIW0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vYjdhZjgz/YTIyZGI2ODliMjYz/ZWRkMzY5YjBkOGY3/MDcwYjU0ZjkyNC0z/NTR4MzUyLnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw"
    return(
        <Box>
            <img src="{imageURL}" alt="login" />

        </Box>
    )
}
export default Login;