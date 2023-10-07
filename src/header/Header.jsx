import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faSearch} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
      {/* *******************affichage du header et son contenu sur les grands ecrans**************************8 */}
      <div className="container-fluid bg-body-tertiary d-lg-block d-none " id='container'>
      <div className="row row-cols-lg-2 row-cols-1 gx-5 align-items-center">
       <div>
       <div className="row " id="row">
        <div className="col text-end">
            <FontAwesomeIcon icon={faPhone}/> +234 9132021995
          </div>
          <div className="col text-start"><FontAwesomeIcon icon={faEnvelope}/> universitetoukra@gmail.com</div>
        </div></div>
       <div className="row align-items-center" id="row">
          <div className="col text-end">Contactez-Nous</div>
          <div className="col-9 align-items-center bg-primary text-white shadow fs-4 d-inline" data-bs-toggle="modal" data-bs-target="#GFG" id='end'>recherche..<FontAwesomeIcon icon={faSearch} className='fs-5'/></div>
        </div>
      
    </div>
    </div>
    {/* ******************affichage du maodal sur les ecrans ordinnateurs et desktop et laptop xl et xxl************************* */}
    <div class="modal fade " id="GFG">
            <div class="modal-dialog modal-fullscreen ">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h5 class="modal-title text-white " >
                            Faites vos recherches ici
                        </h5>
                        <button type="button"  class="btn-close bg-white" 
                           data-bs-theme="dark" data-bs-dismiss="modal">
                        </button>
                    </div>
                    <div class="modal-body ">
                      <input type="search" placeholder='Search..'/>
                      < FontAwesomeIcon icon={faSearch} className="text-white fs-1 mx-2 mt-2"/>
                    </div>
                </div>
            </div>
        </div>

    {/* ********** affichage de l'entete sur les ecrans mobiles************ */}
    <div className="container-fluid bg-body-tertiary d-block d-lg-none" id='container'>
      <div className="row ">
       <div>
       <div className="row row-cols-1 text-center" id="row">
        <div className="col">
            <FontAwesomeIcon icon={faPhone}/> +234 9132021995
          </div>
          <div className="col "><FontAwesomeIcon icon={faEnvelope}/> universitetoukra@gmail.com</div>
        </div></div>
       <div className="row " id="row">
       <hr />
          <div className="col">Contactez-Nous</div>
          <div className="col-2 shadow  bg-primary text-white fs-4"  data-bs-toggle="modal" data-bs-target="#full" id='end'>recherche..<FontAwesomeIcon icon={faSearch} className='fs-4 mt-1'/></div>
        </div>
      
    </div>
    </div>
    {/* ************affichage du modal sur les ecrans mobiles et tablettes*********** */}
    <div class="modal fade" id="full">
            <div class="modal-dialog modal-fullscreen-lg-down">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h5 class="modal-title text-white">
                         Faites vos recherches ici
                        </h5>
                        <button type="button" className="btn-close bg-white" 
                                data-bs-dismiss="modal">
                        </button>
                    </div>
                    <div class="modal-body">
                    <input type="search" placeholder='Search..'/>
                      < FontAwesomeIcon icon={faSearch} className="text-white fs-4 mx-1 mt-1"/>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Header
