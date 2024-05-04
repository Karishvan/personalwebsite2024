import Card from "./Card";

const Skills = () => {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="card-group">
        <Card image="/images/React-icon.png" title="React">
          From creating this website, I have gained exposure to using React with
          TypeScript. I have used React features like reusable components and
          props to differentiate components by certain details. Additionally I
          have used state hooks to update data based on user input such as my
          Projects carousel that showcases some of my projects.
        </Card>
        <Card image="/images/Java-Logo.png" title="Java">
          I have used Java for over 3 years, covering core concepts such as
          Object Oriented Programming, and using key data structures such as
          HashMaps to increase searching efficiency. Also using Java, I have
          implemented 2D Graphical interfaces using Java AWT and implemented
          exception handling to throw and catch errors on bad input.
        </Card>
        <Card image="/images/Python-logo.png" title="Python">
          I have used python for data analysis using libraries like Matplotlib
          and Pandas to extract data from surveys and create visual graphs for
          easier interpretation of trends. Additionally, I have used the Flask
          framework to create back-end logic in projects including QuickFix to
          authenticate users via a SQL database and send email notifications
          with SMTP to allow users to be up to date with project bugs.
        </Card>
      </div>
    </div>
  );
};

export default Skills;
