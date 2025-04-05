import React from "react";
import { useParams } from "react-router-dom";
import "../styles/businessmodel.css";
const services = [
  {
    id: "service1",
    title: "Brand Franchise Business Model",
    image:
      "https://www.franchiseapply.com/admin/uploads/ourservice_images/274912_image2.jpg",
    description:
      " Dealing with any franchise consultancy can be a tough thing to do but if you can manage to come in contact with a good and reputable            franchise consultancy then things will definitely fall in place Franchise consultancies will help you get the best franchise and will also explain to you in detail every aspect associated with it. Franchise Apply provides you extensive services concerning franchise and franchisers; they will not only discuss with you in great detail all the features that are included in he franchise but will also help you deal with every minor and major problem that you might face. We are a team of people who have experience and the expertise associated with franchises and when it comes to us we chase and choose only the best for you. We promise to deliver the best franchise consultancy services to all our clients and provide them the greatest detail of each aspect that worries them in the process of buying a franchise. Avail the extraordinary Franchise Consultancy services of Franchise Apply.com and be a part of our work and work environment.",
  },
  { id: "service2", title: "Service 2", description: "This is service 2." },
  { id: "service3", title: "Service 3", description: "This is service 3." },
  { id: "service4", title: "Service 4", description: "This is service 4." },
];

const BusinessModel = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id.toLowerCase() === id.toLowerCase());

  if (!service) return <h1>Service not found!</h1>;

  return (
    <div>
      <h1 className="text-center py-5">{service.title}</h1>
      <hr />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={service.image} alt="banner-img" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6">
            <p>{service.description} </p>
          </div>
        </div>
      </div>

      <div className="background-banner my-5">
        <div className="container overflow-hidden">
          <div className="row gx-2">
            <div className="details-section col m-2 px-3">
              <h1 className="text-center">150</h1>
              <h6 className="text-center">COMPLETED SERVICES</h6>
              <p className="text-center">with successfully</p>
            </div>
            <div className="details-section col m-2 px-3">
              <h1 className="text-center">15</h1>
              <h6 className="text-center">YEARS OF EXPERIENCE</h6>
              <p className="text-center">on service providing</p>
            </div>
            <div className="details-section col m-2 px-3">
              <h1 className="text-center">20</h1>
              <h6 className="text-center">AWARDS WINNER</h6>
              <p className="text-center">for best quality</p>
            </div>
            <div className="details-section col m-2 px-3">
              <h1 className="text-center">700</h1>
              <h6 className="text-center">SATISFIED CUSTOMER</h6>
              <p className="text-center">around the world</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
