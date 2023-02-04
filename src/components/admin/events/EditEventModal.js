import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function EditEvent({
  data,
  getEvents,
  setOpenModal,
  oneEventLoaded,
  setOneEventLoaded,
}) {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [instructions, setInstructions] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [locationWebsite, setLocationWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

  //setting the default values for the form
  useEffect(() => {
    setName(data.name);
    setEventType(data.event_type);
    setLatitude(data.latitude);
    setLongitude(data.longitude);
    setInstructions(data.instructions);
    setDate(data.date);
    setTime(data.time);
    setPrice(data.price);
    setCapacity(data.capacity);
    setLocationName(data.loc_name);
    setLocationAddress(data.loc_address);
    setLocationWebsite(data.loc_website);
    setDescription(data.description);
  }, [oneEventLoaded, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://api.itisgoodtohave.me/events/update.php/${data.id}`, {
        name: name,
        loc_name: locationName,
        event_type: eventType,
        latitude: latitude,
        longitude: longitude,
        instructions: instructions,
        loc_address: locationAddress,
        loc_website: locationWebsite,
        date: date,
        time: time,
        description: description,
        // image_path: ...,
        price: price,
        capacity: capacity,
      })
      .then(function (response) {
        if (response.status === 200) {
          swal("YEAH BABY!", "You edited this event.", "success");
          setSuccess(true);
        } else if (response.status === 500) {
          swal("Wellllllll...", "Something went wrong here.", "error");
        }
      })
      .then(function () {
        setOneEventLoaded(false);
        getEvents();
        setSuccess(true);
      });
    setOpenModal(false);
  };

  //(to prevent loading old values)
  if (!oneEventLoaded) {
    return null;
  }

  function abortEditing() {
    setOpenModal(false);
    setOneEventLoaded(false);
  }

  return (
    <div className="edit-modal edit-event-modal" onClick={abortEditing}>
      <div className="edit-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="edit-modal-header">
          <h4 className="edit-modal-header">Edit an event</h4>
        </div>

        <div className="edit-modal-body edit-event-body">
          {oneEventLoaded && (
            <div>
              <form id="edit-event-form" onSubmit={handleSubmit}>
                <div className="edit-cont-top">
                  <div className="edit-cont-top-left">
                    <div className="edit-input-cont">
                      <label htmlFor="name">Event: *</label>
                      <input
                        className="edit-input event-input"
                        name="name"
                        type="text"
                        defaultValue={data.name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="edit-input-cont">
                      <label htmlFor="event_type">Type of Event: *</label>
                      <input
                        className="edit-input event-input"
                        name="event_type"
                        type="text"
                        defaultValue={data.event_type}
                        onChange={(e) => setEventType(e.target.value)}
                        list="typesEvents"
                      />
                      <datalist id="typesEvents">
                        <option value="Lesbotoc Event"></option>
                        <option value="Speed Dating"></option>
                        <option value="Other Event"></option>
                      </datalist>
                    </div>

                    <div className="edit-date-time">
                      <div className="edit-input-cont">
                        <label htmlFor="date">Date: *</label>
                        <input
                          className="edit-input event-input"
                          name="date"
                          type="date"
                          defaultValue={data.date}
                          onChange={(e) =>
                            e.target.value === ""
                              ? setDate("")
                              : setDate(e.target.value)
                          }
                        />
                      </div>

                      <div className="edit-input-cont">
                        <label htmlFor="time">Time:</label>
                        <input
                          className="edit-input event-input"
                          name="time"
                          type="time"
                          defaultValue={data.time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="edit-price-cap">
                      <div className="edit-input-cont">
                        <label htmlFor="price">Price:</label>
                        <input
                          className="edit-input event-input"
                          name="price"
                          defaultValue={data.price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>

                      <div className="edit-input-cont">
                        <label htmlFor="capacity">Capacity:</label>
                        <input
                          className="edit-input event-input"
                          name="capacity"
                          defaultValue={data.capacity}
                          onChange={(e) => setCapacity(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="edit-input-cont">
                      <label htmlFor="latitude">Latitude:</label>
                      <input
                        className="edit-input event input"
                        name="latitude"
                        defaultValue={data.latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                      />
                    </div>
                    <div className="edit-input-cont">
                      <label htmlFor="longitude">Longitude:</label>
                      <input
                        className="edit-input event input"
                        name="longitude"
                        defaultValue={data.longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="edit-cont-top-right">
                    <div className="edit-input-cont">
                      <label htmlFor="loc_name">Name of the venue:</label>
                      <input
                        className="edit-input event-input"
                        name="loc_name"
                        type="text"
                        placeholder="example: Cafe XY"
                        defaultValue={data.loc_name}
                        onChange={(e) => setLocationName(e.target.value)}
                      />
                    </div>

                    <div className="edit-input-cont">
                      <label htmlFor="loc_address">Address:</label>
                      <input
                        className="edit-input event-input"
                        name="loc_address"
                        type="text"
                        placeholder="example: Opatovická 12, Praha 11000"
                        defaultValue={data.loc_address}
                        onChange={(e) => setLocationAddress(e.target.value)}
                      />
                    </div>

                    <div className="edit-input-cont">
                      <label htmlFor="loc_website">Website:</label>
                      <input
                        className="edit-input event-input"
                        name="loc_website"
                        type="text"
                        defaultValue={data.loc_website}
                        onChange={(e) => setLocationWebsite(e.target.value)}
                      />
                    </div>

                    {data.image_path && (
                      <div className="edit-input-cont">
                        <p>Image used:</p>
                        <img
                          className="edit-input-pic"
                          src={`https://api.itisgoodtohave.me/events/images/${data.image_path}`}
                          alt={data.image_alt}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="edit-cont-bottom">
                  <div className="edit-input-cont instructions-cont">
                    <label htmlFor="description">Instructions:</label>
                    <textarea
                      className="edit-input event-input"
                      name="description"
                      onChange={(e) => setInstructions(e.target.value)}
                      defaultValue={data.instructions}
                    />
                  </div>

                  <div className="edit-input-cont description-cont">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      className="edit-input event-input"
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                      defaultValue={data.description}
                    />
                  </div>

                  <div className="edit-cont-btn">
                    <button
                      className="btn btn-danger edit-btn"
                      onClick={() => abortEditing()}
                    >
                      Cancel
                    </button>
                    <button className="btn btn-success edit-btn">Save</button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
