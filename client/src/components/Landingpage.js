import React, { Component } from 'react';
import './Landingpage.css';

class Landingpage extends Component {
  render() {
    return (
      <div className="landingpage">
        <div className="container">
          <h1 className="center">
            Umfrage erstellen, einfach, schnell und gratis.
          </h1>
          <div className="flex-container">
            <div className="flex-item center">
              <i className="material-icons">looks_one</i>
              <h4>Anmelden</h4>
              <p>
                Sie benötigen lediglich einen gültigen Google-Account und
                Internet-Zugang.
              </p>
            </div>
            <div className="flex-item center">
              <i className="material-icons">looks_two</i>
              <h4>Umfrage erstellen</h4>
              <p>
                Erstellen Sie schnell und einfach Ihre individuelle Umfrage. Die
                individuelle Gewichtung der Frage gibt Ihrer Umfrage
                zusätzlichen Gestaltungsspielraum.
              </p>
            </div>
            <div className="flex-item center">
              <i className="material-icons">looks_3</i>
              <h4>Umfrage versenden</h4>
              <p>
                Jede Umfrage hat ihren spezifischen Link, über welchen die
                Teilnehmenden mit wenigen Klicks schnell und bequem mitmachen
                können.
              </p>
            </div>
            <div className="flex-item center">
              <i className="material-icons">looks_4</i>
              <h4>Umfrage auswerten</h4>
              <p>
                Sämtliche Antworten der Teilnehmenden werden gespeichert und
                sind für Sie in übersichtlicher Form einsehbar.
              </p>
            </div>
          </div>
          <h2 className="center">Anleitung zum Erstellen einer Umfragemail</h2>
          <table className="tutorial-table">
            <thead>
              <tr>
                <th>Was gehört in eine Umfragemail? </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Betreff mit dem Titel der Umfrage</td>
              </tr>
              <tr>
                <td>Verständliche Entscheidungsfrage</td>
              </tr>
              <tr>
                <td>
                  Die Entscheidungsfrage stellt eine Frage, die mit „Ja“ oder
                  „Nein“ beantwortet werden kann.
                </td>
              </tr>
              <tr>
                <td>
                  Eine Einleitung mit der Begründung, warum die Umfrage
                  durchgeführt wird (Ziel).
                </td>
              </tr>
              <tr>
                <td>
                  Die wichtigste Mitteilung, die Sie Ihren Teilnehmenden
                  mitteilen möchten, nämlich, dass Sie sie bitten, an der
                  Befragung teilzunehmen.
                </td>
              </tr>
              <tr>
                <td>
                  Anonymität. Weisen Sie auf Ihre Handhabung des Themas hin.
                </td>
              </tr>
              <tr>
                <td>
                  Service oder Begründung: Was hat der Teilnehmende davon, wenn
                  er an der Befragung teilnimmt? Was geschieht mit den
                  Ergebnissen?
                </td>
              </tr>
              <tr>
                <td>
                  Ansprechpartner / Kontakte für Rückfragen. Auch wenn ganz
                  wenige Teilnehmend sich tatsächlich bei Ihnen melden werden:
                  eine seriöse und möglichst vollständige Absenderangabe inkl.
                  Name, Signatur, Telefonnummer, E-Mail-Adresse, Funktion, etc.
                  erhöht die Rücklaufquote und das Vertrauen in die
                  Befragungseinladung.
                </td>
              </tr>
              <tr>
                <td>Verabschiedung/Danksagung/Wertschätzung</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Landingpage;
