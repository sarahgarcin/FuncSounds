# FuncSounds

FuncSounds est un programme web permettant la génération de sons et de visuels grâce à une série de fonctions prédéfinies personnalisables.
Il a été développé pour des cours d'introduction à la programmation à l'ENSAD Nancy.

## Démarrage
- Ouvrir le fichier index.html dans votre navigateur préféré

## Fonctionnement
- Ouvrir le fichier js > main.js
- Dans la fonction `function handleKeyDown(e){}`, ajouter des évènement *appuyer sur une touche*, lier à une fonction prédéfinie (voir ci-dessous).

### Exemple : 

`if(e.key == 'a'){
 playSample('files.mp3', 1, 1);
}`

La fonction playSample() est lancé à chaque fois que la touche *a* est pressé.

## Fonctions sonores

### playSample(file, gain, pitch, loop, interval);
Joue un sample prédéfini

**file** = chemin du fichier son (mp3 ou ogg)       
**gain** = volume entre 0 et 1  
**pitch** = déformation du son ralentissement ou accélération, entre 0.3 et 4, 1 étant la valeur "normal"  
*loop et interval sont optionnels*  
**loop** = nombre de fois que le son va être joué en boucle  
**interval** = temps en seconde entre les boubles  

#### Exemples
`playSample("samples/file.mp3", 1, 1);`
Joue le fichier file.mp3, au volume maximum et au pitch normal

`playSample("samples/file.mp3", 1, 1, 3, 3);`
Jour le fichier file.mp3, 3 fois en attendant 3 secondes entre chaque, au volume maximum et au pitch normal


### playNote(wave, note, gain, duration, loop, tempo);
Joue une note 

**wave** = le type de courbe - sine, square, triangle ou sawtooth  
**note** = fréquence en Hz de la note, 440 étant un *La*, plus on descend dans les fréquences, plus la note est basse, plus on monte, plus elle est aigue  
**gain** = volume entre 0 et 1  
**duration** = durée de le note en seconde  
*loop et tempo sont optionnels*  
**loop** = nombre de fois que le son va être joué en boucle  
**tempo** = tempo en bpm (beats par minute)  

#### Exemples
`playNote("triangle", 100, 0.5, 1);`  
Joue la note 100 avec une courbe triangle à un volume de 0.5 pendant 1 seconde

`playNote("sine", 120, 0.5, 1, 3, 50);`
Joue la note 120 avec une courbe sine à un volume de 0.5 pendant 1 seconde, 3 fois sur un tempos de 50 bpm 

### playMelody(wave, melody, rythms, gain, tempo, loop);
Joue une mélodie (plusieurs notes à la suite)
 
**wave** = le type de courbe - sine, square, triangle ou sawtooth  
**melody** = liste de notes sous forme de tableau : [100, 120, 100, 150, 120]  
**gain** = volume entre 0 et 1  
**rythm** = durée de des notes en fraction d'un temps sous forme de tableau : [1.0,2.0,0.5] ce qui correspond à [noir, blanche, croche]  
*loop et tempo sont optionnels*    
**tempo** = tempo en bpm (beats par minute)
**loop** = nombre de fois que la mélodie va être jouée en boucle

## Fonctions visuelles

### changeBackground(color);
Change la couleur de fond, avec une transition animée

#### Exemples 
`changeBackground('aquamarine');`
`changeBackground('#FF0000');`

### addImage(file, top, left, width);
Ajoute une image à partir d'un fichier et la positionne dans la page

**file** = chemin du fichier image (jpg, png ou svg)  
**top** = position de l'image depuis le bord haut de la page, en px  
**left** = position de l'image depuis le bord gauche de la page, en px  
**width** = largeur de l'image, en px (la hauteur s'ajuste automatiquement)  

#### Exemple
`addImage('image.jpg', random(0, 800), random(0, 1280), random(100, 400));`

### addVideo(file, top, left, width, mute);
Ajoute une vidéo à partir d'un fichier et la positionne dans la page

**file** = chemin du fichier vidéo (mp4 ou ogg)    
**top** = position de la vidéo depuis le bord haut de la page, en px  
**left** = position de la vidéo  depuis le bord gauche de la page, en px  
**width** = largeur de la vidéo , en px (la hauteur s'ajuste automatiquement)  
**mute** = *true* ou *false*, enlever le son de la vidéo (ou pas)  

#### Exemple
`addVideo('video.mp4', random(0, 800), random(0, 1280), random(100, 400), true);`


### addText(text, fontsize, top, left, color, font)
Ajoute du texte et le positionne dans la page

**text** = texte à ajouter  
**fontsize** = taille de la typo, en px  
**top** = position du texte depuis le bord haut de la page, en px  
**left** = position du texte depuis le bord gauche de la page, en px  
**color** = couleur du texte en hexadecimal ou en css colors  
**font** = choix de la typographie  

#### Exemple
`addText("TUUUUUUT", 40, random(0, 800), random(0, 1280), 'aquamarine');`


### messyEffect(elements, min, max)
Rend la mise en page bordélique = rotation aléatoire d'éléments déterminés

**elements** = liste d'éléments HTML dans laquelle mettre le foutoir  
**min** = valeur minimum de la rotation  
**max** = valeur maximum de la rotation  

#### Exemple
`messyEffect(['p', 'figure'], -15, 15);`


## Fonctions d'aléatoire
Ces fonctions permettent la génération de nombres ou de valeurs aléatoires.
Elles peuvent être utilisées n'importe où, à la place d'un nombre ou d'un texte.

### random(min, max)
Génére un nombre aléatoire entre min et max

#### Exemple
`random(1, 100)` va générer un nombre aléatoire entre 1 et 100, 87 par exemple.

`playNote("sine", random(50, 120), 1, 0.5);`

### shuffle(list)
Prend une valeur aléatoire dans la list, peut contenir des nombres ou du texte

#### Exemple 
`shuffle('100, 150, 200')` va choisir soit 100, soit 150 soit 200 dans la liste

`playNote("sine", shuffle('100, 150, 200'), 1, 0.5);`

## Thanks
- [Raphaël Bastide](https://raphaelbastide.com) pour [été](https://raphaelbastide.com/ete/) qui m'a beaucoup inspiré.

## Licence
*FuncSounds* est disponible sous licence libre [GNU AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html).


