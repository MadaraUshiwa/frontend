import "./Modal.css";
import { SlClose } from "react-icons/sl";
import logo from "../../assets/logo.png";
import { TbLogin2 } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa6";
import Link from "next/link";


export default function Modal(props) {
    return (
        <div className="modal">
            <span onClick={() => props.close(false)} className="close"><SlClose /></span>

            <div className="modal-content">
                <div className="choice">
                    <div className="connexion">
                        <TbLogin2 />
                        <Link onClick={() => props.close(false)} className="loginbutton" href="/login" >Connexion</Link>
                    </div>
{/* 
                    <div className="separatormodal"></div>

                    <div className="signup">
                        <FaUserCheck />
                        <Link onClick={() => props.close(false)} className="loginbutton" href="/register" >S'inscrire</Link>

                    </div> */}

                </div>
            </div>
        </div>
    );
}