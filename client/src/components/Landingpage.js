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
      </div>
    );
  }
}

export default Landingpage;
