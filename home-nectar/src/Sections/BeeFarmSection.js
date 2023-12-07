export default function BeeFarmSection() {
  const beeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="m720-600-32 28q-14 13-33 13t-33-11q-14-11-19-28t1-36l16-50-34-20q-16-9-22.5-26t-1.5-34q5-17 20-26.5t34-9.5h40l12-38q6-19 20.5-30.5T720-880q17 0 31.5 11.5T772-838l12 38h40q19 0 33.5 9.5T878-764q7 18 0 35t-22 25l-36 20 16 50q6 19 1 36.5T818-570q-15 11-33.5 11T752-572l-32-28Zm0-80q17 0 28.5-11.5T760-720q0-17-11.5-28.5T720-760q-17 0-28.5 11.5T680-720q0 17 11.5 28.5T720-680ZM552-244q23 60-15 112T430-80q-33 0-62.5-17T324-142q-83 12-137.5-42.5T142-324q-30-17-46-46.5T80-438q0-61 55.5-98.5T244-552l62 26q20-31 53-50.5t71-21.5v-82h60v90q37 11 61 34.5t41 65.5h88v60h-82q-2 38-20.5 71T528-306l24 62Zm-248 24q0-27 4.5-52.5T322-322q-23 11-49.5 15.5T220-304q0 39 22.5 61.5T304-220Zm-74-164q32 0 56.5-8t63.5-32l-120-50q-29-12-49.5.5T160-434q0 26 17 38t53 12Zm200 224q25 0 40.5-17.5T478-214l-54-136q-19 32-29.5 64T384-228q0 33 11.5 50.5T430-160Zm66-222q10-10 16-26.5t6-34.5q0-32-21-54t-52-22q-18 0-34 6t-27 17l78 36 34 78Zm-174 60Z" />
    </svg>
  );

  const farmIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h120q33 0 56.5 23.5T360-600H160Zm80 360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm540 0q25 0 42.5-17.5T840-300q0-25-17.5-42.5T780-360q-25 0-42.5 17.5T720-300q0 25 17.5 42.5T780-240Zm-540-60q-25 0-42.5-17.5T180-360q0-25 17.5-42.5T240-420q25 0 42.5 17.5T300-360q0 25-17.5 42.5T240-300Zm560-139q26 5 43 13.5t37 27.5v-242q0-33-23.5-56.5T800-720H548l-42-44 56-56-28-28-142 142 30 28 56-56 42 42v92q0 33-23.5 56.5T440-520h-81q23 17 37 35t28 45h16q66 0 113-47t47-113v-40h200v201ZM641-320q6-27 14.5-43.5T682-400H436q4 23 4 40t-4 40h205Zm139 160q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-540 0q-83 0-141.5-58.5T40-360q0-83 58.5-141.5T240-560q83 0 141.5 58.5T440-360q0 83-58.5 141.5T240-160Zm393-360Z" />
    </svg>
  );

  const beeHiveIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="m390-80-68-120H190l-90-160 68-120-68-120 90-160h132l68-120h180l68 120h132l90 160-68 120 68 120-90 160H638L570-80H390Zm248-440h86l44-80-44-80h-86l-45 80 45 80ZM438-400h84l45-80-45-80h-84l-45 80 45 80Zm0-240h84l46-81-45-79h-86l-45 79 46 81ZM237-520h85l45-80-45-80h-85l-45 80 45 80Zm0 240h85l45-80-45-80h-86l-44 80 45 80Zm200 120h86l45-79-46-81h-84l-46 81 45 79Zm201-120h85l45-80-45-80h-85l-45 80 45 80Z" />
    </svg>
  );

  return (
    <section id="farm-section" className="bee-farm-background">
      <img
        className="farm-background-img"
        src="/img/Farm-background.png"
        alt="Background lines"
      />
      <div className="section bee-farm-section">
        <h2 className="heading-secondary">Bee Farm</h2>
        <div className="bee-farm-grid">
          <div className="bee-farm-div">
            <div className="bee-farm-intro-div">
              <p className="bee-farm-intro-main-p">
                Nestled in the heart of nature, our apiary is dedicated to the
                delicate craft of beekeeping
              </p>
              <p className="bee-farm-intro-p">
                Producing exceptional honey and emphasizing the crucial role
                bees play in our ecosystem
              </p>
            </div>

            <div className="bee-farm-topics-div bee-topic">
              <div className="bee-farm-topic-icon-div">
                <span className="bee-farm-bee-icon">{beeIcon}</span>
                <p className="bee-farm-icon-p">THE BUZZING ARCHITECTS</p>
              </div>
              <div className="bee-farm-text-content-div">
                <h3 className="bee-farm-h3">Our Bees</h3>
                <p className="bee-farm-content-p">
                  Meet our extraordinary residents, the honeybees. Beyond being
                  mere honey producers, these industrious insects serve as
                  nature's architects. Darting from blossom to blossom, they
                  collect nectar and pollinate local flora, ensuring the rich
                  biodiversity that envelops our farm
                </p>
              </div>
              <div className="bee-farm-img-div">
                <img className="bee-farm-img" src="/img/bees.webp" alt="Bees" />
              </div>
            </div>
          </div>

          <div className="bee-farm-div">
            <div className="bee-farm-topics-div beekeeper-topic">
              <div className="bee-farm-topic-icon-div">
                <span className="bee-farm-beekeeper-icon">{beeHiveIcon}</span>
                <p className="bee-farm-icon-p">GUARDIANS OF THE HIVE</p>
              </div>

              <div className="bee-farm-text-content-div">
                <h3 className="bee-farm-h3">Dedicated Beekeepers</h3>
                <p className="bee-farm-content-p">
                  Behind each jar of honey lies the dedication of our skilled
                  beekeepers. Trained in the ancient art of apiculture, our team
                  tends to the hives with precision and care. Their expertise
                  ensures the health and prosperity of our bee colonies,
                  fostering environments that allow these remarkable insects to
                  thrive
                </p>
              </div>

              <div className="bee-farm-img-div">
                <img
                  className="bee-farm-img"
                  src="/img/bee-hive.webp"
                  alt="Bees"
                />
              </div>
            </div>

            <div className="bee-farm-topics-div farm-topic">
              <div className="bee-farm-topic-icon-div">
                <span className="bee-farm-farm-icon">{farmIcon}</span>
                <p className="bee-farm-icon-p">NATURE AND NURTURING</p>
              </div>

              <div className="bee-farm-text-content-div">
                <h3 className="bee-farm-h3">The Farm</h3>
                <p className="bee-farm-content-p">
                  Our bee farm is a serene blend of nature and nurturing.
                  Surrounded by wildflowers and embraced by the gentle hum of
                  bees, our farm is a testament to the symbiotic relationship
                  between humans and nature
                </p>
              </div>

              <div className="bee-farm-img-div">
                <img className="bee-farm-img" src="/img/farm.webp" alt="Bees" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
