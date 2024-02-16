<!DOCTYPE html>
<html>
  <head>
    <title>Form Presentation</title>
  </head>
  <body>
    <h1>Petit Formulaire PHP</h1>
    <form method="POST" action="process.php">
      <label for="name">Nom:</label>
      <input type="text" id="name" name="name" required /><br /><br />

      <label for="age">Âge:</label>
      <input type="number" id="age" name="age" required /><br /><br />

      <label for="job">Métier:</label>
      <input type="text" id="job" name="job" required /><br /><br />
    </form>

    <button onclick="showSummary()">Récapitulatif</button>

    <script>
      function showSummary() {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const job = document.getElementById("job").value;

        alert("Nom: " + name + "\nage: " + age + "\nmetier: " + job);
      }
    </script>
    <br />
    <a href="main.html">Retour</a>
  </body>
</html>
