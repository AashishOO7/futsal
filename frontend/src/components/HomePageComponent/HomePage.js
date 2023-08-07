import React from 'react';
import { Link } from 'react-router-dom';
import a from './p1.jpg';
import b from './2.jpeg';
import c from './3.webp';
import d from './4.jpeg';

function HomePage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div
            id="futsalCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={a} className="d-block w-100" alt="Futsal 1" />
              </div>
              <div className="carousel-item">
                <img src={b} className="d-block w-100" alt="Futsal Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={c} className="d-block w-100" alt="Futsal Slide 3" />
              </div>
              <div className="carousel-item">
                <img src={d} className="d-block w-100" alt="Futsal Slide 4" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#futsalCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#futsalCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="mt-4">
            <div className="card">
              <div className="card-body">
                <h2>Welcome to Our FutsalFinder</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt vestibulum erat, ut bibendum metus tincidunt eu. Nullam
                  congue non velit eget tincidunt. Vivamus bibendum odio ut
                  facilisis. Duis lacinia bibendum quam, vel dictum neque semper eu.
                  Integer non ligula et enim feugiat elementum. Proin faucibus
                  rhoncus vestibulum. Fusce efficitur elit eu arcu placerat, vitae
                  consequat dolor sollicitudin.
                </p>
                <Link to="/playerlogin" className="btn btn-primary">
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
