import React, { Component } from 'react';

class Landingpage extends Component {
  render() {
    return (
      <div className="landingpage">
        <div className="container">
          <div className="row">
            <div className="col s12" />
            <h3>Anleitung zum Erstellen einer Umfragemail</h3>
            <h5>Was gehört in eine Umfragemail? </h5>
            <ol>
              <li>Betreff mit dem Titel der Umfrage</li>
              <li>Verständliche Entscheidungsfrage</li>
              <li>
                Die Entscheidungsfrage stellt eine Frage, die mit „Ja“ oder
                „Nein“ beantwortet werden kann.
              </li>
              <li>
                Eine Einleitung mit der Begründung, warum die Umfrage
                durchgeführt wird (Ziel).
              </li>
              <li>
                Die wichtigste Mitteilung, die Sie Ihren Teilnehmenden mitteilen
                möchten, nämlich, dass Sie sie bitten, an der Befragung
                teilzunehmen.
              </li>
              <li>
                Anonymität. Weisen Sie auf Ihre Handhabung des Themas hin.
              </li>
              <li>
                <strong>
                  Service oder Begründung: Was hat der Teilnehmende davon, wenn
                  er an der Befragung teilnimmt? Was geschieht mit den
                  Ergebnissen?
                </strong>
              </li>
              <li>
                Ansprechpartner / Kontakte für Rückfragen. Auch wenn ganz wenige
                Teilnehmend sich tatsächlich bei Ihnen melden werden: eine
                seriöse und möglichst vollständige Absenderangabe inkl. Name,
                Signatur, Telefonnummer, E-Mail-Adresse, Funktion, etc. erhöht
                die Rücklaufquote und das Vertrauen in die Befragungseinladung.
              </li>
              <li>Verabschiedung/Danksagung/Wertschätzung</li>
            </ol>
          </div>
        </div>

        <div className="slider">
          <ul className="slides">
            <li>
              <img
                className="blurry"
                src="https://lorempixel.com/580/250/nature/1"
                alt="natur"
              />
              <div className="gradient">
                <div className="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </div>
            </li>
            <li>
              <img
                className="blurry"
                src="https://lorempixel.com/580/250/nature/2"
                alt="natur"
              />
              <div className="gradient">
                <div className="caption left-align">
                  <h3>Left Aligned Caption</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </div>
            </li>
            <li>
              <img
                className="blurry"
                src="https://lorempixel.com/580/250/nature/3"
                alt="natur"
              />
              <div className="gradient">
                <div className="caption right-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </div>
            </li>
            <li>
              <img
                className="blurry"
                src="https://lorempixel.com/580/250/nature/4"
                alt="natur"
              />
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12" />
            <h3>Anleitung zum Erstellen einer Umfragemail</h3>
            <h5>Was gehört in eine Umfragemail? </h5>
            <ol>
              <li>Betreff mit dem Titel der Umfrage</li>
              <li>Verständliche Entscheidungsfrage</li>
              <li>
                Die Entscheidungsfrage stellt eine Frage, die mit „Ja“ oder
                „Nein“ beantwortet werden kann.
              </li>
              <li>
                Eine Einleitung mit der Begründung, warum die Umfrage
                durchgeführt wird (Ziel).
              </li>
              <li>
                Die wichtigste Mitteilung, die Sie Ihren Teilnehmenden mitteilen
                möchten, nämlich, dass Sie sie bitten, an der Befragung
                teilzunehmen.
              </li>
              <li>
                Anonymität. Weisen Sie auf Ihre Handhabung des Themas hin.
              </li>
              <li>
                <strong>
                  Service oder Begründung: Was hat der Teilnehmende davon, wenn
                  er an der Befragung teilnimmt? Was geschieht mit den
                  Ergebnissen?
                </strong>
              </li>
              <li>
                Ansprechpartner / Kontakte für Rückfragen. Auch wenn ganz wenige
                Teilnehmend sich tatsächlich bei Ihnen melden werden: eine
                seriöse und möglichst vollständige Absenderangabe inkl. Name,
                Signatur, Telefonnummer, E-Mail-Adresse, Funktion, etc. erhöht
                die Rücklaufquote und das Vertrauen in die Befragungseinladung.
              </li>
              <li>Verabschiedung/Danksagung/Wertschätzung</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Landingpage;
