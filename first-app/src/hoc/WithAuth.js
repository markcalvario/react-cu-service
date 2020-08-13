import {useAuth} from "../customHooks/CustomHooks"

const WithAuth= props=> useAuth(props) && props.children;

export default WithAuth;