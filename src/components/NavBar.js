import React from 'react';
import {Link} from "react-router-dom"

export const NavBar = () => {
    return (
        <div>
          <Link to="/">Home</Link> |
          <Link to="/profile">Profile</Link> |
          <Link to="/contact">Contact</Link> |

          <Link to="/lesson2">Lesson2</Link> |
          <Link to="/lesson3">Lesson3</Link> |
          <Link to="/lesson4">Lesson4</Link> |

          <Link to="/lesson6">Lesson6</Link> |
          <Link to="/lesson7">Lesson7</Link> |
          <Link to="/lesson10">Lesson10</Link> |
          <Link to="/lesson11">Lesson11</Link> |

        </div>
    );
};
