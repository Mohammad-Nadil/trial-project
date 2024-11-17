import React from "react";
import Container from "../layer/Container";

const Home = () => {
  return (
    <div className="">
      <Container>
        <p className="text-8xl">Home</p>
      </Container>
      <Container>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  What We Do
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item dropend">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Health Rights
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Health Policy
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Non-Communicable Diseases (NCD)
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Tobacco Control
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropend">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Economic & Social Justice
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Ensure Our Rights
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Gender
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropend">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Livable cities
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Environment
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Urban Structure
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Healthy and Safe Travel
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Water and Sanitation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropend">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Get Involved
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Internships
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Volunteering
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"> Publications</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Support
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item dropend">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Network
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          National Network
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          International Network
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Partner</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Training Facilities
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="nav-link">Accomodation</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Meeting Room</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Dinning</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Area Information</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Home;
