<template>
    <section>
        <div class="container py-5 mt-5">

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Rövid kérdőív</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hosszú kérdőív</a>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">

                <!-- rövid kérdőív -->
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ShortSurvey></ShortSurvey>
                </div>

                <!-- hosszú kérdőív -->
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <LongSurvey></LongSurvey>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import ShortSurvey from '../components/ShortSurvey.vue';
import LongSurvey from '../components/LongSurvey.vue';

export default {
    components: {
        ShortSurvey,
        LongSurvey,
    }
};
</script>
