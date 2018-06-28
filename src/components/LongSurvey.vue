<template>
    <div class="row py-5 mx-4">

        <div class="col-12 col-md-7 py-md-3">
            <p>Teljes munkaidőben dolgozik?</p>
        </div>

        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1">
            <label class="form-check-label" for="inlineRadio3">Igen</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option2">
            <label class="form-check-label" for="inlineRadio4">Nem</label>
            </div>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Általában hány órát dolgozik egy héten?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-row">
            <div class="col-md-6 mb-3">
                <input type="number" class="form-control" id="validationDefault03" placeholder="" required>
            </div>
            </div>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Egy vagy több fizetett állással rendelkezik?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <form>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option1">
                <label class="form-check-label" for="inlineRadio5">Igen</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option2">
                <label class="form-check-label" for="inlineRadio6">Nem</label>
            </div>
            </form>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Gyes/gyed-en vagy egyéb állományban van?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <form>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option1">
                <label class="form-check-label" for="inlineRadio7">Igen</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option2">
                <label class="form-check-label" for="inlineRadio8">Nem</label>
            </div>
            </form>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Munkaképtelen hosszantartó betegség vagy fogyatékosság miatt?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option1">
            <label class="form-check-label" for="inlineRadio9">Igen</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option2">
            <label class="form-check-label" for="inlineRadio10">Nem</label>
            </div>
        </div>


        <div class="col-12 col-md-7 py-md-3">
            <p>Milyen a cég tulajdoni formája, ahol dolgozik?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válassz</option>
            <option value="1">Belföld</option>
            <option value="2">Külföld</option>
            <option value="3">Állami tulajdon</option>
            <option value="4">Szövetkezet</option>
            <option value="5">Egyesület</option>
            <option value="3">Köztulajdon</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Hány főt foglalkoztató cégnél dolgozik?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Open this select menu</option>
            <option value="1">1-10</option>
            <option value="2">10-20</option>
            <option value="3">20-50</option>
            <option value="3">50-100</option>
            <option value="3">100-200</option>
            <option value="3">200-</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>A cég ahol dolgozik több helyszínen is jelen van?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" value="option1">
            <label class="form-check-label" for="inlineRadio11">Igen</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio12" value="option2">
            <label class="form-check-label" for="inlineRadio12">Nem</label>
            </div>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Mennyire elégedett a munkájával?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">Nagyon elégedett</option>
            <option value="2">Ideális</option>
            <option value="3">Elégedetlen</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Figyelembe véve a munkakörét és a hozzá tartozó feladatait, mennyire elégett a fizetésével?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">Nagyon elégedett</option>
            <option value="2">Ideális</option>
            <option value="3">Elégedetlen</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>otthagyná-e jelenlegi munkahelyét, ha egy másik cég nagyobb fizetést ajánlana?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio13" value="option1">
            <label class="form-check-label" for="inlineRadio13">Igen</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio14" value="option2">
            <label class="form-check-label" for="inlineRadio14">Nem</label>
            </div>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Eddigi élete folyamán hányszor váltott munkahelyet?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3-5</option>
            <option value="4">6-10</option>
            <option value="5">10-nél többször</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Hány éve dolgozik jelenleg munkahelyén?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">0-1 év</option>
            <option value="2">1-3 év</option>
            <option value="3">3-5 év</option>
            <option value="3">5-10 év</option>
            <option value="3">10- év</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Hány éves tapasztalattal rendelkezik?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">0-1 év</option>
            <option value="2">1-3 év</option>
            <option value="3">3-5 év</option>
            <option value="3">5-10 év</option>
            <option value="3">10- év</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Munkája során szüksége van idegennyelv tudásra?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio15" value="option1">
            <label class="form-check-label" for="inlineRadio15">Igen</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio16" value="option2">
            <label class="form-check-label" for="inlineRadio16">Nem</label>
            </div>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Milyen nyelven/nyelveken beszél?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">angol</option>
            <option value="2">német</option>
            <option value="3">francia</option>
            <option value="4">orosz</option>
            <option value="5">kínai</option>
            </select>
            <select class="custom-select my-4">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">angol</option>
            <option value="2">német</option>
            <option value="3">francia</option>
            <option value="4">orosz</option>
            <option value="5">kínai</option>
            </select>
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">angol</option>
            <option value="2">német</option>
            <option value="3">francia</option>
            <option value="4">orosz</option>
            <option value="5">kínai</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Mennyi időt fordított jelenlegi szakmájának elsajátítására?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">0-1 év</option>
            <option value="2">1-3 év</option>
            <option value="3">3-5 év</option>
            <option value="3">5-10 év</option>
            <option value="3">10- év</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Ön szerint mennyi tanulás szükséges ahhoz, hogy valaki teljes hatékonysággal tudja az Ön munkáját ellátni?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">0-1 év</option>
            <option value="2">1-3 év</option>
            <option value="3">3-5 év</option>
            <option value="3">5-10 év</option>
            <option value="3">10- év</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Képzettsége megfelel munkakörének?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">0-1 év</option>
            <option value="2">1-3 év</option>
            <option value="3">3-5 év</option>
            <option value="3">5-10 év</option>
            <option value="3">10- év</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Van igénye arra, hogy továbbképezze magát?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio17" value="option1">
            <label class="form-check-label" for="inlineRadio17">Igen</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio18" value="option2">
            <label class="form-check-label" for="inlineRadio18">Nem</label>
            </div>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Milyen hosszúságú továbbképzéseken vett részt önköltséges alapon az elmúlt egy évben?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <select class="custom-select">
            <option selected>Válasszon a lehetőségek közül</option>
            <option value="1">0-1 év</option>
            <option value="2">1-3 év</option>
            <option value="3">3-5 év</option>
            <option value="3">5-10 év</option>
            </select>
        </div>

        <div class="col-12 col-md-7 py-md-3">
            <p>Finanszírozott valamilyen továbbképzést cége az elmúlt 1 évben?</p>
        </div>
        <div class="col-12 col-md-5 py-md-3 mb-3">
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio19" value="option1">
            <label class="form-check-label" for="inlineRadio19">Igen</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio20" value="option2">
            <label class="form-check-label" for="inlineRadio20">Nem</label>
            </div>
        </div>

        <div class="col text-center mt-5">
            <button class="btn btn-outline-success" type="submit">Elküldöm</button>
        </div>
    </div>

</template>

<script>
export default {};
</script>
