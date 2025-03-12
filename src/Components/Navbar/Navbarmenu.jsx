import react, { useEffect } from "react";
import $ from 'jquery';
import { NavLink } from "react-router-dom";

const Navbarmenu = () => {
    useEffect(() => {
        $('.mobile_menu').hide();
        $('#show-menu').click(function () {
            $('.mobile_menu').show(600);

            $('#hide-menu').click(function () {
                $('.mobile_menu').hide(800)
            })

            return () => {
                $('#show-menu').off('click');
                $('#hide-menu').off('click');



            };
        })

    }, [])
    return (
        <>
            {/* menubarstart */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12  navbar-menu">
                        <div className="block-element d-lg-none d-sm-block d-md-block">
                            <ul className="list-unstyled">
                                <li className="d-lg-none d-sm-block d-md-block"  ><i class="ri-menu-fill" id="show-menu"></i></li>
                            </ul>
                        </div>
                        <div className="logo">
                            <h2>
                                <NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "bold",
                                        textDecoration: "none"
                                    })}
                                    to='/'>Water Purifiers</NavLink></h2>
                        </div>

                        <div className="menu-contact d-lg-block d-sm-nome d-md-none d-none">
                            <ul className="list-unstyled  ">

                                <li><NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "500",
                                        textDecoration: "none"
                                    })}
                                    to="/waterpurifier">WATER PURIFIER</NavLink></li>
                                <li><NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "500",
                                        textDecoration: "none"
                                    })}
                                    to="/bestseller">BESTSELLER</NavLink></li>
                                <li><NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "500",
                                        textDecoration: "none"
                                    })}
                                    to="/about">ABOUT US</NavLink></li>
                                <li><NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "500",
                                        textDecoration: "none"
                                    })}
                                    to="/contact">CONTACT</NavLink></li>
                            </ul>
                        </div>
                        <div className="logo-and-cart">
                            <ul className="d-flex list-unstyled">
                                <li><i className="ri-search-line " data-toggle="modal" data-target="#exampleModal"></i></li>
                                <li><NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "500",
                                        textDecoration: "none"
                                    })}
                                    to='cart'><i class="ri-shopping-cart-line"></i></NavLink></li>
                                <li><NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "500",
                                        textDecoration: "none"
                                    })}
                                    to='/loginpage'><i class="ri-account-circle-fill"></i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {/* mobile_menu */}
                    <div className="mobile_menu">
                        <div className="logo-menu">
                            <h2>Water Purifiers</h2>
                            <i class="ri-close-large-fill" id="hide-menu"></i>
                        </div>
                        <ul className="list-unstyled  ">
                            <li>
                                <NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "500",
                                        textDecoration: "none"
                                    })}
                                    to='/'>HOME</NavLink>
                            </li>
                            <li><NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? "#007A3D" : "Black",
                                    fontWeight: isActive ? "bold" : "500",
                                    textDecoration: "none"
                                })}
                                to="/waterpurifier">WATER PURIFIER</NavLink></li>
                            <li><NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? "#007A3D" : "Black",
                                    fontWeight: isActive ? "bold" : "500",
                                    textDecoration: "none"
                                })}
                                to="/bestseller">BESTSELLER</NavLink></li>
                            <li><NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? "#007A3D" : "Black",
                                    fontWeight: isActive ? "bold" : "500",
                                    textDecoration: "none"
                                })}
                                to="/about">ABOUT US</NavLink></li>
                            <li><NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? "#007A3D" : "Black",
                                    fontWeight: isActive ? "bold" : "500",
                                    textDecoration: "none"
                                })}
                                to="/contact">CONTACT</NavLink></li>
                        </ul>
                        <div className="menu-logo-and-cart">
                            <ul className="d-flex list-unstyled">
                                {/* <li><i class="ri-search-line"></i></li> */}
                                <li><NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? "#007A3D" : "Black",
                                        fontWeight: isActive ? "bold" : "500",
                                        textDecoration: "none"
                                    })}
                                    to='cart'><i class="ri-shopping-cart-line"></i></NavLink></li>
                                <li><i class="ri-account-circle-fill"></i></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Navbarmenu