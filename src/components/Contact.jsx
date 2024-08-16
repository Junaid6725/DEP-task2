import React from "react";

const Contact = () => {
  return (
    <>
      <section class="mb-xl-9">
        <div class="container">
          <div class="row row border-top border-bottom">
            <div class="col-md-4 border-end-md border-bottom border-bottom-md-0">
              <div class="text-center p-5 px-xl-8 px-md-0">
                <div class="icon-lg icon-shape rounded-circle bg-body-tertiary border mb-4">
                  <i className="bi bi-geo-alt-fill text-primary"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>

                <h5>Location</h5>
                <p class="mb-0">
                  Ahmedabad hall 74 Grand Avenue South, Cambridge, ON
                </p>
              </div>
            </div>
            <div class="col-md-4 border-end-md border-bottom border-bottom-md-0">
              <div class="text-center p-5 px-xl-8 px-md-0">
                <div class="icon-lg icon-shape rounded-circle bg-body-tertiary border mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-window-dock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                    <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12ZM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1ZM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2Z" />
                  </svg>
                </div>

                <h5>Date and time</h5>
                <p class="mb-0">
                  Tuesday, June 20, 2024 6:00 PM - 10:00 PM EDT
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-5 px-xl-8 px-md-0">
                <div class="icon-lg icon-shape rounded-circle bg-body-tertiary border mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-ticket-detailed-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Zm0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Z" />
                  </svg>
                </div>

                <h5>Admission</h5>
                <p class="mb-0">
                  $79 per person Registration opens May 17, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
